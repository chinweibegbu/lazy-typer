import '../styles/Selection.css';

function Selection() {
    return (
        <div className="row h-75 col-lg-5 col-sm-9 mx-auto align-content-center">
            <h4 className="text-center">Select Game:</h4>
            <button type="button" class="btn mt-2 retro-btn">Option 1</button>
            <button type="button" class="btn mt-2 retro-btn">Option 2</button>
            <button type="button" class="btn mt-2 retro-btn">Option 3</button>
        </div>
    );
}

export default Selection;