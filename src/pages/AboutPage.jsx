import Slider from "./../components/Slider/Slider";

const AboutPage = () => {
  return (
    <section>
      <h1>About Page</h1>
      <Slider
        min={0}
        max={100}
        render={(value) => (
          <div
            style={{
              height: "56px",
              position: "releative",
              backgroundColor: "pink",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "red",
                width: `${value}%`,
              }}
            ></div>
          </div>
        )}
      />
      <Slider
        min={100}
        max={1000}
        render={(value) => <p>curent value {value}</p>}
      />
    </section>
  );
};

export default AboutPage;
