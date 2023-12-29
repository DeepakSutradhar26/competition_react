const Star = () => {
    return (
        <div>
            <div key={props.id} id="spark1" className={props.title ? props.star : "star"}></div>
            <div key={props.id} id="spark2" className={props.title ? props.star : "star"}></div>
            <div key={props.id} id="spark3" className={props.title ? props.star : "star"}></div>
            <div key={props.id} id="spark4" className={props.title ? props.star : "star"}></div>
            <div key={props.id} id="spark5" className={props.title ? props.star : "star"}></div>
            <div key={props.id} id="spark6" className={props.title ? props.star : "star"}></div>
        </div>
    );
}

export default Star;