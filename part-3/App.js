function App() {
    return (
        <div>
            <Person
                name="John Doe"
                age={55}
                hobbies={["watching Sports", "playing golf", "playing with his dog"]}
            />
            <Person
                name="Mary Jane"
                age={45}
                hobbies={["reading a book", "sewing", "being with family"]}
            />
            <Person
                name="Billy Bob"
                age={15}
                hobbies={["playing baseball", "playing mario cart", "collecting unique rocks"]}
            />
            <Person
                name="Susie Sue"
                age={10}
                hobbies={["reading", "hanging ot with friends", "singing and dancing"]}
            />
        </div>
    );
}
