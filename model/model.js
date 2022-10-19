var MODEL = (function() {
    var homeContent = ` <div class="home">
        <section class="hero">
            <img src="./images/hero.jpeg" alt="">
            <div class="overlay">
                <div class="container">
                    <h1>travel-fly</h1>
                    <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Fugiat aliquid minus nemo sed est.</i>
                    <div class="learn-more"><a href="#" style="border-radius: 0;">READ MORE</a></div>
                </div>
            </div>
        </section>
        <div class="wrapper">
            <section class="promo-holder">
                <div class="holder">
                    <div class="image"><img src="./images/tour-01.jpeg" alt=""></div>
                    <div class="overlay">
                        <div class="text">
                            <h1>ISRAEL</h1>
                            <h2>from $1000</h2>
                        </div>
                        <div class="learn-more"><a href="#" id="israel">Learn More</a></div>
                    </div>
                </div>
                <div class="holder">
                    <div class="image"><img src="./images/tour-02.jpeg" alt=""></div>
                    <div class="overlay">
                        <div class="text">
                            <h1>U.S.A</h1>
                            <h2>from $1500</h2>
                        </div>
                        <div class="learn-more"><a href="#" id="usa">Learn More</a></div>
                    </div>
                </div>
                <div class="holder">
                    <div class="image"><img src="./images/tour-03.jpeg" alt=""></div>
                    <div class="overlay">
                        <div class="text">
                            <h1>Australia</h1>
                            <h2>from $1800</h2>
                        </div>
                        <div class="learn-more"><a href="#" id="australia">Learn More</a></div>
                    </div>
                </div>
            </section>

        </div>
        <section class="booking-form">
            <div class="container">
                <div class="title">
                    <h1>Booking form</h1>
                </div>
                <form action="#">
                    <input type="text" name="name" id="name" placeholder="name...">
                    <input type="text" name="email" id="email" placeholder="email...">
                    <input type="text" name="country" id="country" placeholder="country...">
                    <input type="text" name="hotel" id="hotel" placeholder="hotel...">
                    <div class="check-in"><label for="check-in">Check-in</label>
                        <input type="date" name="check-in" id="check-in" placeholder="05/10/2022"></div>
                    <div class="check-out"><label for="check-out">Check-out</label>
                        <input type="date" name="check-out" id="check-out" placeholder="05/20/2020"></div>
                    <div class="group">
                        <div class="adults"> <label for="adult">Adult</label>
                            <select name="adult" id="adult">
                        <option value="1">1 </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select></div>
                        <div class="children"> <label for="children">Children</label>
                            <select name="children" id="children">
                        <option value="1">1 </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select></div>
                        <div class="rooms"> <label for="rooms">Rooms</label>
                            <select name="rooms" id="rooms">
                        <option value="1">1 </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select></div>
                    </div>
                    <div class="message">
                        <input type="text" name="message" class="message" placeholder="Message..." />
                    </div>
                    <div class="learn-more"><a href="#">SUBMIT</a></div>
                </form>
            </div>
        </section>
    </div>`;
    var aboutContent = `<section class="about">
        <div class="title-span">
            <div class="title">
                <h1>About:</h1>
                <div class="main-title-underline">

                </div>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <section class="client-quotes">
            <div class="title">
                <h2>Client Quotes:</h2>
                <div class="subtitle-underline">

                </div>
            </div>
            <div class="image-text-container">
                <div class="image">
                    <img src="./images/about-client-01.jpeg" alt="">
                </div>
                <div class="quote">
                    <blockquote><q>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    </q>
                        <cite>- Miranda Brown</cite>
                    </blockquote>
                </div>
            </div>
            <div class="image-text-container">
                <div class="image">
                    <img src="./images/about-client-02.jpeg" alt="">
                </div>
                <div class="quote">
                    <blockquote><q>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    </q>
                        <cite>- Johnathan Wes</cite>
                    </blockquote>
                </div>
            </div>
        </section>
    </section>`;
    var specialOffersContent = `<section class="title">
        <h1>Special Offers</h1>
        <div class="underline"></div>
    </section>

    <section class="special-offers">
        <div class="offer">
            <div class="image">
                <img src="./images/special-offer-01.jpeg" alt="">
            </div>
            <div class="offer-text">
                <h2>Barcelona, Spain</h2>
                <div class="group">
                    <div class="underline"></div>
                    <div class="discount">
                        <h3>
                            (20% off!)
                        </h3>
                    </div>
                </div>
                <div class="description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
                <div class="learn-more"><a href="#" id="spain">Learn More</a></div>
            </div>
        </div>
        <div class="offer">
            <div class="image">
                <img src="./images/special-offer-02.jpeg" alt="">
            </div>
            <div class="offer-text">
                <h2>Bangkok, thailand</h2>
                <div class="group">
                    <div class="underline"></div>
                    <div class="discount">
                        <h3>
                            (10% off!)
                        </h3>
                    </div>
                </div>
                <div class="description">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </div>
                <div class="learn-more"><a href="#">Learn More</a></div>
            </div>
        </div>
    </section>`;
    var toursContent = `<section class="banner">
        <div class="image">
            <img src="./images/tours-header.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>Tours:</h1>
        </div>
    </section>
    <section class="tours">
        <div class="holder">
            <div class="image"><img src="./images/tour-01.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>ISRAEL</h1>
                    <h2>from $1000</h2>
                </div>
                <div class="learn-more"><a id="israel" class="israel" href="#">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-02.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>U.S.A.</h1>
                    <h2>from $1500</h2>
                </div>
                <div class="learn-more"><a id="usa" href="#">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-03.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>Australia</h1>
                    <h2>from $1800</h2>
                </div>
                <div class="learn-more"><a href="#" id="australia">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-04.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>New Zealand</h1>
                    <h2>from $1200</h2>
                </div>
                <div class="learn-more"><a id="newZealand" href="#">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-05.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>France</h1>
                    <h2>from $2500</h2>
                </div>
                <div class="learn-more"><a id="france" href="#">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-06.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>Egypt</h1>
                    <h2>from $900</h2>
                </div>
                <div class="learn-more"><a id="egypt" href="#">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-07.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>Japan</h1>
                    <h2>from $1300</h2>
                </div>
                <div class="learn-more"><a href="#" id="japan">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-08.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>Canada</h1>
                    <h2>from $2000</h2>
                </div>
                <div class="learn-more"><a id="canada" href="#">Learn More</a></div>
            </div>
        </div>
        <div class="holder">
            <div class="image"><img src="./images/tour-09.jpeg" alt=""></div>
            <div class="overlay">
                <div class="text">
                    <h1>U.A.E.</h1>
                    <h2>from $3000</h2>
                </div>
                <div class="learn-more"><a id="uae" href="#">Learn More</a></div>
            </div>
        </div>
    </section>`;
    var blogContent = `<section class="title">
        <h1>Blog</h1>
        <div class="underline"></div>
    </section>

    <section class="blog">
        <div class="post">
            <div class="calendar">
                <div class="date">
                    06
                </div>
                <div class="month">
                    Jun
                </div>
            </div>
            <div class="image-text">
                <div class="image">
                    <img src="./images/blog.jpeg" alt="">
                </div>
                <div class="text">
                    <div class="black">
                        Sed et persipiatis unde omnis iste natus
                    </div>
                    <div class="blue">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </div>
                </div>
            </div>
        </div>
        <div class="post">
            <div class="calendar">
                <div class="date">
                    06
                </div>
                <div class="month">
                    Jun
                </div>
            </div>
            <div class="image-text">
                <div class="image">
                    <img src="./images/blog.jpeg" alt="">
                </div>
                <div class="text">
                    <div class="black">
                        Sed et persipiatis unde omnis iste natus
                    </div>
                    <div class="blue">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </div>
                </div>
            </div>
        </div>
    </section>`;
    var contactContent = `<section class="title">
        <h1>Contact us:</h1>
        <div class="underline"></div>
    </section>
    <section class="contact">
        <div class="map">
            <div class="map-image">
                <img src="./images/map.png" alt="">
            </div>
            <div class="map-address">
                <pre>
travel-fly Inc. 
8901 Marmora Road,
Glasgow, D04 89GR.
Freephone:+1 800 559 6580
Telephone:+1 800 603 6035
FAX:+1 800 889 9898
E-mail: mail@travelfly.org
                </pre>
            </div>
        </div>
        <div class="contact-form">
            <form action="#">
                <input type="text" name="name" id="name" placeholder="Your Name..." />
                <input type="text" name="email" id="email" placeholder="Email Address...">
                <input type="text" name="company" placeholder="Company..." id="company">
                <input type="text" name="message" id="message" placeholder="Message...">
                <button onclick="Submit">Submit</button>
            </form>
        </div>
    </section>`;
    var australiaContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-03.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>Australia tour package:</h1>
            <p>STARTING FROM $1800 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/aus-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/aus-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/aus-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var canadaContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-08.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>Canada tour package:</h1>
            <p>STARTING FROM $2000 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/canada-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/canada-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/canada-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var egyptContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-06.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>Egypt tour package:</h1>
            <p>STARTING FROM $900 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/egypt-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/egypt-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/egypt-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var franceContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-05.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>France tour package:</h1>
            <p>STARTING FROM $2500 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/france-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/france-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/france-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var israelContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-01.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>Israel tour package:</h1>
            <p>STARTING FROM $1000 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/israel-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/israel-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/israel-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var japanContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-07.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>Japan tour package:</h1>
            <p>STARTING FROM $1300 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/japan-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/japan-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/japan-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var newZealandContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-01.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>New Zealand tour package:</h1>
            <p>STARTING FROM $1200 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/nz-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/nz-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/nz-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var uaeContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-09.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>U.A.E. tour package:</h1>
            <p>STARTING FROM $3000 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/uae-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/uae-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/uae-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;
    var usaContent = `<section class="hero-container">
        <div class="image">
            <img src="./images/tour-02.jpeg" alt="">
        </div>
        <div class="overlay">
            <h1>U.S.A tour package:</h1>
            <p>STARTING FROM $1500 (prices may vary)</p>
        </div>
    </section>
    <section class="image-container">
        <div class="image"><img src="./images/tour/usa-tour-01.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/usa-tour-02.jpeg" alt=""></div>
        <div class="image"><img src="./images/tour/usa-tour-03.jpeg" alt=""></div>
    </section>
    <section class="days">
        <div class="day">
            <h2>Day #1:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <div class="underline">

            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="learn-more">
            <a href="#">Book Now</a>
        </div>
    </section>`;

    function initListeners() {
        // $("nav .links a").click(function(e) {
        //     let btnId = e.currentTarget.id;
        //     console.log("click" + btnId);
        //     MODEL.changePageContent(btnId);
        // })
        $("a").click(function(e) {
            let btnId = e.currentTarget.id;
            console.log("clicked " + btnId);
            MODEL.changePageContent(btnId);
        })

    }


    var _changePageContent = function(pageName) {
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));

        if (pageName == "home") {
            $("#nav").removeClass("dark");
            $("#logo").html(`<img src="./images/logo-white.svg" alt="">`)
        } else {
            $("#nav").addClass("dark");
            $("#logo").html(`<img src="./images/logo-black.svg" alt="">`)
        }

        initListeners();

    }


    return {
        changePageContent: _changePageContent,
    }
})();