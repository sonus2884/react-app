import './Card.css'

const Cart = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Cart;