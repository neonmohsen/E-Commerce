import MenuItem from "../menu-item/menuItem";
import {useSelector} from "react-redux";

import "./directory.styles.scss"
import { selectDirectory } from "../../services/redux/directorySelector";

export default function Directory() {

  const directory = useSelector(state => selectDirectory(state));

  return (
    <div className="directory-menu">
        {
            directory ? directory.map(({id , ...other}) => {
                return <MenuItem key = {id} {...other} />
            }) : null
        }
    </div>
  );
}
