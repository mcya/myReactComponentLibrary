import React, { Component } from 'react';
import style from './index.less';

class ShowHide extends Component {
    static defaultProps = {
      ShowHideBtn: () => {}
    }
    constructor() {
        super();
        //初始化组件状态
        this.state = {
            number: 0,
            dropdown: '展开',
            isDropdown: false,
            className: 'drop1'
        }
    }
    componentDidMount() {
      if (this.props.dropdown) { //传入dropdown属性时，默认收起
        this.setState({ isDropdown: false, dropdown: '展开', className: 'drop1' })
      } else {
        this.setState({ isDropdown: true, dropdown: '收起', className: 'drop' })
      }
    }
    toggleDown(event) {
        if (this.state.isDropdown && this.state.dropdown == '收起') {
            this.setState({
              isDropdown: false,
              dropdown: '展开',
              className: 'drop1'
            });
            this.props.ShowHideBtn()
        } else {
            this.setState({
              isDropdown: true,
              dropdown: '收起',
              className: 'drop'
            })
            this.props.ShowHideBtn()
        }
    }
    render() {
        return (
            <div className={style.shBody}>
              <div className={style[this.state.className]} onClick={this.toggleDown.bind(this)}>
                  {this.state.dropdown}
              </div>
              <div className={style.dropCon} style={{ display: this.state.isDropdown ? 'block' : 'none' }}>
                {this.props.children}
              </div>
            </div>
        );
    }
}
export default ShowHide;
