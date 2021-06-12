import React, { Component } from 'react';
import './react-table.css';

class BoardForm extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.brdno) {
            this.brdtitle.value ="";
            this.brdwriter.value = "";
            return true;
        }

        this.brdtitle.value = selectedBoard.brdtitle;
        this.brdwriter.value = selectedBoard.brdwriter;
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            brdwriter: this.brdwriter.value,
            brdtitle: this.brdtitle.value
        }
        if (selectedBoard.brdno) {
            data.brdno = selectedBoard.brdno
            data.brddate = selectedBoard.brddate
        }
        this.props.onSaveData(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="boardform">
                {/* 컴포넌트 내의 변수나 함수를 참조할때는 this를 붙여야 한다. */}
                <input placeholder="title" ref={node => this.brdtitle = node} />
                <input placeholder="name" ref={node => this.brdwriter = node} />
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default BoardForm;