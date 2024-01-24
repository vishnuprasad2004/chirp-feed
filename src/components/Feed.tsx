"use client";

import Post from "./Post";



export default function Feed() {
    



    return( 
        <div className="lg:w-2/4 flex flex-col border border-neutral-800 scroll-smooth overflow-y-scroll w-max no-scrollbar">
            <div className="border border-neutral-600 w-full p-3">
                Home
            </div>
            <div className="">

                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus. */}
                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus. */}
                {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur blanditiis tempora eum odit quaerat quo. Praesentium sunt, minima eos debitis saepe fugiat cumque quo laudantium dolorum placeat ducimus quia accusamus.  */}
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
                <Post
                    key={"123456789"}
                    username={"alexdunphy"}
                    name={"Alex Dunphy"}
                    avaterUrl={"/profile-image.jpg"}
                    date={"1d"}
                    likes={100}
                    postDescription={"I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️...I did it man, I did it, got selected at IBM, finally the first full time offer after internships, my parents were so happy and they literally cried, and me too 😭❤️"}   
                ></Post>
            </div>
        </div>
    )

}