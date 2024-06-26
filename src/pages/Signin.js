import { React, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import { BoxOfStuff } from '../components/BoxOfStuff';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../index.css';
import under_construction from '../images/under_construction.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Signin = () => {

    const { microsoftSignIn, githubSignIn, googleSignIn, user } = UserAuth();

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            .then(navigate('/start-threat-modelling'))
            
        } catch (error) {
        }
    }

    const handleMicrosoftSignIn = async () => {
        try {
            await microsoftSignIn()
            .then(navigate('/start-threat-modelling'))
        } catch (error) {

        }
    }

    const handleGithubSignIn = async () => {
        try {
            await githubSignIn()
            .then(navigate('/start-threat-modelling'))
        } catch(error) {

        }
    }

    useEffect(() => {
        if (user !== null && user.uid !== undefined) {
            navigate('/start-threat-modelling')
        }
    }, [user])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        <BoxOfStuff>
            <div class="centered">
                
            </div>

            <div class="centered">
                <h1>Sign in</h1>

            </div>

            <Typography padding={2} align="center" >
                The Threat Modelling Tool.
                <br/>
                <br/>
                Sign in to Threat Modelling tool below.
            </Typography>
            <div class="centered padded">
            <ButtonGroup aria-label="sign in button group">
            <Button onClick={handleMicrosoftSignIn}>Sign in with Microsoft</Button>

                <Button startIcon={<GoogleIcon/>} onClick={handleGoogleSignIn}>Sign in with Google</Button>
                <Button variant="contained" startIcon={<GitHubIcon/>} onClick={handleGithubSignIn}>Sign in with Github</Button>
</ButtonGroup>
                {/* <GoogleButton type="light" onClick={handleGoogleSignIn} /> */}
            </div>
        </BoxOfStuff>
      </>
    )
}

export default Signin;