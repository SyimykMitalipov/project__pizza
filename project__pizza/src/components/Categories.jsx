import React from 'react';

// class Categories extends React.Component {
//     state = {
//         activeItem: null,
//         who: 'Syimyk'
//     }
//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         })
//     }
//     render() {
//         const { items ,  onClick } = this.props
//         console.log(this.state);
//         return (
//         <div className="categories">
//               <ul>
//                 <li className="active">Все</li>
//                 {
//                     items.map((name, index) => <li className={this.state.activeItem === index ? "active": ''} onClick={() => this.onSelectItem(index)} key={`${name}_${index}`}>{ name }</li> )
//                 }
//               </ul>
//             </div>
//     );
//     }
// }

const Categories = React.memo(({ items ,  onClickItem }) => {
    const [activeItem , setActiveItem] = React.useState(null)
     const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }
    
    return (
        <div className="categories">
              <ul>
                <li className={activeItem === null ? "active": ''} onClick={() => onSelectItem(null)}>Все</li>
                {items &&
                    items.map((name, index) => <li className={activeItem === index ? "active": ''}
                    onClick={() => onSelectItem(index)} key={`${name}_${index}`}>{ name }</li> )}
              </ul>
            </div>
    );
})

export default Categories;
