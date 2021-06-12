import React, { Component } from 'react';
import BoardForm from './App_BoardForm';
import BoardItem from './App_BoardItem';
import BoardSearch from './App_BoardSearch';
import './react-table.css';

class App extends Component {

  // 컴포넌트 자신이 사용하는 것 - state 상태
  // 부모로 부터 받은 것 - props 속성
  state = {
    maxNum: 3,
    boards: [
      {
        brdno: 1, // 글번호
        brdwriter: 'Kim Bong Jun', // 작성자
        brdtitle: '안녕하세요', // 글제목
        brddate: new Date() // 작성일자
      },
      {
        brdno: 2,
        brdwriter: 'Lee Dong 9',
        brdtitle: '반갑습니다',
        brddate: new Date()
      }
    ],
    selectedBoard: {}
  }

  handleSaveData = (data) => {
    if (!data.brdno) {
      this.setState({
        maxNum: this.state.maxNum + 1,
        boards: this.state.boards.concat({ brdno: this.state.maxNum, brddate: new Date(), ...data }),
        selectedBoard: {}
      });
    } else {
      this.setState({
        boards: this.state.boards.map(row => data.brdno === row.brdno ? { ...data } : row),
        selectedBoard: {}
      })
    }
  }

  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    })
  }

  handleSelectRow = (row) => {
    this.setState({ selectedBoard: row });
  }

  render() {
    const { boards, selectedBoard } = this.state;

    return (
      <div>
        <h2>bong`s test table</h2>
        <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData} /><br />
        <table className="react-table">
          <tbody>
            <tr className="table-tr">
              <td>글번호</td>
              <td>제목</td>
              <td>이름</td>
              <td>등록일</td>
            </tr>
            {
              boards.map(row =>
                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
              )
            }
          </tbody>
        </table>
        <BoardSearch />
      </div>
    );
  }
}

export default App;