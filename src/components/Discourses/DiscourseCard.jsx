import { Button } from "@mui/material";
import "./DiscourseCard.css";
import PropTypes from "prop-types";
const DiscourseCard = ({ img }) => {
  return (
    <div className="discourse_card_container">
      <div className="discourse_card">
        <img src={img} alt="course image" />
        <div>
          <h1>Course Name</h1>
          <p>
            Course Description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet hic reprehenderit a perspiciatis porro
            obcaecati, beatae pariatur deserunt odit praesentium nostrum ab
            ipsum rerum illo! Eaque id officia saepe nobis recusandae maxime
            voluptatibus quos! lorem34
          </p>
          <Button variant="contained" color="success">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};
DiscourseCard.propTypes = {
  img: PropTypes.string.isRequired,
};
export default DiscourseCard;
