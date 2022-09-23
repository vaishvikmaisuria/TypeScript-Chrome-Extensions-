import React from "react";
import { Box, Card, CardContent, CardActions, Button } from "@mui/material";

const WeatherCardContainer: React.FC<{
    children: React.ReactNode;
    onDelete?: () => void;
}> = ({ children, onDelete }) => {
    return (
        <Box mx={"4px"} my={"16px"}>
            <Card>
                <CardContent>{children}</CardContent>
                <CardActions>
                    {onDelete && (
                        <Button color="secondary" onClick={onDelete}>
                            Delete
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Box>
    );
};

export default WeatherCardContainer;
