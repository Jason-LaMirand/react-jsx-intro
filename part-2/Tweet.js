function Tweet(props) {
    return (
        // <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        //     <div class="card-header">{props.name}</div>
        //     <div class="card-body">
        //         <h4 class="card-title">@{props.username}</h4>
        //         <p class="card-text">{props.message}</p>
        //         <p class="card-text">{props.date}</p>
        //     </div>
        // </div>
        <div>
            {props.name}
            @{props.username}
            {props.date}
            <p>{props.message}</p>
        </div>
    );
}
