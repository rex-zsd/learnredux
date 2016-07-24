import React, {Component, PropTypes} from 'react';
import styles from './style.less';
console.log(PropTypes);
const propTypes = {
  index: PropTypes.object.isRequired,
  getDataAsync: PropTypes.func.isRequired
};

class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getDataAsync();
  }

  handleClick() {
    this.props.getDataAsync(123123);
  }

  render() {
    const data = this.props.index;
    return (
      <div>
        <div className={styles.text}>{data.FName}</div>
        hello world!
        my app.hhhh
        <button onClick={this.handleClick} className={styles.button}>click</button>
      </div>
    )
  }
}

Index.propTypes = propTypes;

export default Index;
