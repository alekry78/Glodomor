import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Icon = styled(FontAwesomeIcon)`
    width:13px;
    height:13px;
    color:${({theme})=>theme.color.purple};
    margin:1px 2px;
    cursor:pointer;
`