import React from 'react';
import { Grid, Paper, Typography, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
    padding: '16px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },
    width: '100%', // Adjust width as needed
    height: '100%', // Adjust height as needed
});

const StyledAvatar = styled(Avatar)({
    width: '150px', // Adjust avatar width
    height: '150px', // Adjust avatar height
    margin: '0 auto 10px',
    border: '2px solid #d7d1de',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        boxShadow: '0px 4px 10px rgba(63, 81, 181, 0.5)',
        transform: 'scale(1.1)',
    },
});

const detailStyle = {
    textAlign: 'left',
    marginTop: '10px',
    lineHeight: '1.6',
};

const buttonContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
};

const TeacherProfile = () => {

    const teacher = {
        name: 'John Doe',
        subject: 'Math',
        qualification: 'M.Sc. Mathematics',
        experience: '10 years',
        email: 'john.doe@example.com',
        bio: 'John has been teaching Mathematics for over a decade and has a passion for helping students excel.',
        image:'https://img.freepik.com/premium-photo/kids-gets-ready-school-home-schooling-education-home-school-pupil-elementary-school-classroo_265223-54324.jpg',
        socialMedia: {
            linkedIn: 'http://localhost:3000/free/profile',
            twitter: 'https://twitter.com/johndoe',
        },
        officeHours: 'Mon-Fri, 9am - 12pm',
        courses: ['Algebra', 'Calculus', 'Geometry'],
    };

    return (
        <Grid item xs={12} md={7} lg={8}>
            <StyledPaper>
                <h5>Profile</h5>
                <StyledAvatar src={teacher.image} alt={teacher.name} />
                <Typography variant="h6">{teacher.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{teacher.subject}</Typography>
                <div style={detailStyle}>
                    <Typography variant="body2"><strong>Qualification:</strong> {teacher.qualification}</Typography>
                    <Typography variant="body2"><strong>Experience:</strong> {teacher.experience}</Typography>
                    <Typography variant="body2"><strong>Email:</strong> {teacher.email}</Typography>
                    <Typography variant="body2"><strong>Bio:</strong> {teacher.bio}</Typography>
                    <Typography variant="body2"><strong>Office Hours:</strong> {teacher.officeHours}</Typography>
                    <Typography variant="body2"><strong>Courses:</strong> {teacher.courses.join(', ')}</Typography>
                </div>
                <div style={buttonContainerStyle}>
                    <Button
                        variant="contained"
                        color="primary"
                        href={teacher.socialMedia.linkedIn}
                        target="_blank"
                        rel="noopener"
                    >
                        Entry
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'red', color: 'white' }}
                        href={teacher.socialMedia.twitter}
                        target="_blank"
                        rel="noopener"
                    >
                        Exit
                    </Button>
                </div>
            </StyledPaper>
        </Grid>
    );
};

export default TeacherProfile;