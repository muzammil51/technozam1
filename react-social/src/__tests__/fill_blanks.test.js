// import { render, screen } from "@testing-library/react";
// import renderer from 'react-test-renderer';
// import "@testing-library/jest-dom"
// import { BrowserRouter } from "react-router-dom";
// import Home from "../home/Home";
// import Login from "../user/login/Login";
// import Signup from "../user/signup/Signup";

// test("render Home component",() => {
    
//     render(<BrowserRouter>
//     <Shortqs />
//     </BrowserRouter>);


//     var textele = screen.getAllByRole('button');
//     expect(textele).toHaveLength(1)
// });

// test("render Signup component",() => {
    
//     render(<BrowserRouter>
//     <Shortqs />
//     </BrowserRouter>);

//     var textele = screen.getAllByRole('button');
//     expect(textele).toHaveLength(1)
// });

// test("render Signup component",() => {
    
//     render(<BrowserRouter>
//     <Shortqs />
//     </BrowserRouter>);

//     var textele = screen.getAllByRole('link');
//     expect(textele).toBeDefined()
// });

import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Login from "../user/login/Login";
import Signup from "../user/signup/Signup";

test("render Home component",() => {
    
    render(<BrowserRouter>
    <Home />
    </BrowserRouter>);


    var textele = screen.getAllByRole('button');
    expect(textele).toHaveLength(1)
});

test("render Signup component",() => {
    
    render(<BrowserRouter>
    <Signup />
    </BrowserRouter>);

    var textele = screen.getAllByRole('button');
    expect(textele).toHaveLength(1)
});

test("render Signup component",() => {
    
    render(<BrowserRouter>
    <Signup />
    </BrowserRouter>);

    var textele = screen.getAllByRole('link');
    expect(textele).toBeDefined()
});