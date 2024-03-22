import Board from "../components/Board"
import TopBar from "../components/TopBar"

const Home = ({ category, setCategory, setView }) => {

    return (
        <div style={{ padding: '10px' }}>
            <div>
                <h1 className='text-center'>The Daily Bugle</h1>
                <TopBar setCategory={setCategory} setView={setView} />
            </div>
            <div>
                <Board category={category} />
            </div>
        </div>
    )
}

export default Home