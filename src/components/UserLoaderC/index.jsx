import React, {Component} from "react";

class UserLoaderC extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isFetching: false,
            isError: false,
            currentPage: 1,
        };
    }

    load = () => {
        const {currentPage} = this.state;
        this.setState({isFetching: true});
        fetch(`https://randomuser.me/api/?seed=pd2021&results=5&inc=name,email&page=${currentPage}`)
        .then(response => response.json())
        .then(data => { 
            this.setState({users: data.results});
            console.log(data.results);
            }
            )
        .catch(error => {this.setState({isError: true})})
        .finally(() => {this.setState({isFetching: false})});
    }


    componentDidMount(){
        this.load();
    }

    componentDidUpdate(prevProps, prevState){
        const {currentPage} = this.state;
        if(prevState.currentPage !== currentPage){
            this.load();
        }
    }

    prevPage = () => {
        const {currentPage} = this.state;
        if(currentPage > 1) this.setState({currentPage: currentPage - 1}); 
        console.log('page is',currentPage); 
    }

    nextPage = () => {
        const {currentPage} = this.state;
        this.setState({currentPage: currentPage + 1});
        console.log('page is',currentPage);        
    }

    render(){
        const {users, isError, isFetching} = this.state;
        if(isError){
            return <div>Error</div>
        }
        if(isFetching){
            return <div>Load...</div>
        }
        return (
            <>
            <button onClick={this.prevPage}>prev page</button>
            <button onClick={this.nextPage}>next page</button>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{JSON.stringify(user)}</li>
                ))}
            </ul>
            </>
        );
    }
}

export default UserLoaderC;