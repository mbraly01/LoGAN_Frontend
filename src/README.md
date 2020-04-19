#loGAN:
##loGAN is a React app made for generating logos for brands.

######The steps for loGAN:
1) scrape the web for logos and industries of brands which have logos
2) take in a brand name and industry in frontend
3) create a database of brand names that are similar to the brand name input and brands that share the same industry
4) create an array of image data of logos from brands of previous database by pulling images from s3 bucket
5) run loGAN using array created above
6) display images on frontend
7) allow user to download an image, and save any downloaded images to an s3 bucket
8) display all previously downloaded images in gallery

##Notes on files:

    ######App.js: the file that puts all the components together

    ######Components folder:
        Card.js: generated image component for image display component
        Gallery.js: wrapper component for gallery card components
        GalleryCard.js: displays past downloaded logos
        Home.js: The landing page component. Takes in input for loGAN
        Images.js: wrapper component for card components
        
    