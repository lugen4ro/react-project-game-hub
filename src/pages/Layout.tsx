import { Box, Flex, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Flex justify="end" mr="1rem" my="-1rem">
                <Link
                    color="gray"
                    href="https://rawg.io/apidocs"
                    target="_blank"
                >
                    All data/images from RAWG.io
                </Link>
            </Flex>
            <Box padding={5}>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
