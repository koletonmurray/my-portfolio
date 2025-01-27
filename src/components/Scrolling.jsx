import React, { useEffect, useLayoutEffect, useCallback } from 'react';
import { useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import SmoothScroll from 'smooth-scroll';
import { useLocation } from 'react-router-dom';

// Implement soft scroll with on-page anchor tags
function initializeSmoothScroll() {
  new SmoothScroll('a[href*="#"]', {
    speed: 100,
    offset: 5,
  });
}

// Scroll to top on route change
function scrollToTopOnChange({pathname}) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // If we do want to change this to a softer scroll, replace the parenthasis with this ({ top: 0, behavior: 'smooth' })
  }, [pathname]);  
}

function Scrolling() {
  // Anchor tag smooth scroll
  useEffect(() => {
    initializeSmoothScroll();
  }, []);

  // Route change
  const { pathname } = useLocation();
  scrollToTopOnChange({pathname})  

  // Scroll to top button
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* The null below allows us to have multiple scoll functionalities built into one */}
      {null}

      {/* Renders the scroll to top button */}
      <Zoom in={trigger}>
        <Box
          role="presentation"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 100,
          }}
        >
          <Fab
            onClick={scrollToTop}
            size="small"
            aria-label="Scroll back to top"
            sx={{
                color: "white",
                backgroundColor: "#6CA4AC",
                "&:hover": {
                  backgroundColor: "#B4ECEB",
                  color: "#1C5B74"
                },
            }}
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    </>
  );
}

export default Scrolling;