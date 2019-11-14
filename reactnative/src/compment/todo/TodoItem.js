import React from 'react'

class TodoItem extends React.Component {

    data() {
        const type = "text"
        const placeholder = "请输入数据";
        return {type: type, placeholder : placeholder}
    }
    render() {
        const data = this.data();
        return (
            <div>
                <p>请点击</p>
                <input placeholder={data.placeholder} type={data.type}/>
            </div>
        )
    }



}

export default TodoItem
