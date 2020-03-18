import Test from '../components/test';
import i18n from '../i18n';

const Home = () => {
    let tests = [];

    for (let index = 0; index < 100; index++) {
        let testsinner = [];
        for (let index2 = 0; index2 < 10; index2++) {
            testsinner.push(<Test key={`${index}_${index2}`} />);
        }
        tests.push(<Test key={index}>{testsinner}</Test>);
    }

    return (
        <div>
            {tests}
        </div>
    );
}

export default Home
