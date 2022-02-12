

import React, { Component } from 'react'

class ErrorBoundaries extends Component{
    constructor(props){
        super(props)
        this.state={
            isError:false
        }
    }
    static getDerivedStateFromError(error){
        return {isError:true}
    }

    componentDidCatch(error,info){
        console.log(error)
    }


    render(){
        if(this.state.isError){return <div>Something went wrong</div>}
        return this.props.children       
    }
}

export default ErrorBoundaries