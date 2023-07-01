
import PropTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
    <>
    <div>
    <label htmlFor="filter" className={css.filter_lable}>Find contacts by neme</label>
    </div>
    <input id="filter" className={css.filter_input} name="filter" type="text" value={value} onChange={onChange}  />
    </>
);

Filter.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Filter; 
