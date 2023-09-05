function App() {
    return (
        <div>
            <Tweet
                name="Bill Hader"
                username="Stefon"
                date={new Date().toDateString()}
                message="This place has everything: Pugs, geezers, doo-wop groups, 
                a wise old turtle that looks like Quincy Jones,” and, excitingly, 
                “you’ll have your own When Harry Met Sally moment when you share a special kiss with Gizblow, the coked-up gremlin."
            />
            <Tweet
                name="Kristin Wig"
                username="Gilly"
                date={new Date().toDateString()}
                message="I love hugs!!!!"
            />
            <Tweet
                name="Will Farrell"
                username="Marty Culp"
                date={new Date().toDateString()}
                message="And I’m Marty Culp. We head up the Music Department at Alta Dina Middle School."
            />
        </div>
    );
}
