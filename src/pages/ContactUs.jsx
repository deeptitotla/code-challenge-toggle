import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextInput from '../components/TextInput';
import { getFeatureToggle } from '../api/featureToggle.service';
import { Toggle } from '../app.config';
import { Box, Container } from '@mui/material';

const ContactUs = () => {
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
        try {
            getFeatureToggle().then(function (result) {
                setEnableButton(result.isFeedbackButtonEnabled)
            });
        }
        catch {
            setEnableButton(Toggle);
        }
    }, [])

    return (
        <Container sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Please provide your feedback here
            </Typography>
            <Box sx={{ mb: 2 }}>
                <TextInput
                    variant="filled"
                    label="Feedback"
                    multiline
                    rows={4}
                />
            </Box>
            <Box sx={{ mb: 2 }}>
                <Button variant="contained" id="submit" disabled={!enableButton}>Submit</Button>
            </Box>
        </Container>
    )
}

export default ContactUs;