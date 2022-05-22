import { faBold } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styled";

export default function IconButton({
  icon, active=false, ...rest
}) {
  
  return (
    <Container
      className="c-iconbutton"
      active={active} {...rest}>
      <FontAwesomeIcon
        icon={icon}
      />
    </Container>
  )
}