import React from "react"
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import "./Style.css"
function Footer(props) {
    return (
        <div className="footer">
            <Typography variant="body2" color="inherit" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                All In One Store
            </Link>
            {new Date().getFullYear()}
            
        </Typography>
        </div>
    );
}
export default Footer;