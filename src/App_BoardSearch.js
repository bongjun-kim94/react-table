import React, { Component } from 'react';

class BoardSearch extends Component {

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        console.log('2341234')
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         customers: '',
    //         completed: 0,
    //         searchKeyword: ''
    //     }
    //     this.stateRefresh = this.stateRefresh.bind(this);
    //     this.handleValueChange = this.handleValueChange.bind(this)
    // }

    const filterComponents = (data) => {
        data = data.filter((c) => {
            return c.name.indexOf(this.state.searchKeyword) > -1;
        });
        return data.map((c) => {
            return
        });
    }

    render() {
        return (
            <form>
                <input placeholder="검색어를 입력하세요" name="searchKeword" onChange={this.handleValueChange} />
            </form>
        );
    }
}

export default BoardSearch;