import styles from "../layout/Images.module.css";
import InsaneButton from './insanenbutton';

const RecreatePastComponent = () => {
  return (
    <>
      <div className={`flex justify-center items-center min-w-full min-h-full ${styles.parent}`}>
        <div className={`flex justify-center items-center bg-no-repeat bg-cover bg-center fixed top-0 left-0 right-0 bottom-0`} style={{ backgroundImage: 'url(/create.jpg)' }}>
          <div className={`flex flex-col justify-center items-center p-5 md:p-20 bg-white bg-opacity-70 shadow-xl ${styles.myblackui}`}>
            <div className="text-2xl md:text-4xl font-bold mb-5 text-center">Let's recreate the past</div>
            <div className="text-lg md:text-2xl mb-10 text-center">
              <p className="whitespace-pre-wrap">Flashback assistant will help you create your past version</p>
            </div>
            <InsaneButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecreatePastComponent;
