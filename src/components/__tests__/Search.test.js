const { render } = require("@testing-library/react");
const { iterate } = require("glob");
const { json } = require("react-router-dom");


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the Body Component with Search",()=>{
    render(<Body/>);
})