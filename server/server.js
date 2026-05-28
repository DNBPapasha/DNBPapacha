const express = require('express');
const path = require('path');

const session = require('express-session');

const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;

const mongoose = require('mongoose');

const User = require('./models/User');

const app = express();



// =========================
// MONGODB CONNECT
// =========================

mongoose.connect('mongodb+srv://papadrop:1488GITLERSS@papadrop.bu5ye8e.mongodb.net/?appName=papadrop')

.then(() => {

    console.log('MONGODB CONNECTED');

})

.catch((err) => {

    console.log('MONGO ERROR');

    console.log(err);

});



// =========================
// SESSION
// =========================

app.use(session({

    secret: 'papadropsecret',

    resave: false,

    saveUninitialized: false

}));



// =========================
// PASSPORT
// =========================

app.use(passport.initialize());

app.use(passport.session());



// =========================
// SAVE USER IN SESSION
// =========================

passport.serializeUser((user, done) => {

    done(null, user);

});

passport.deserializeUser((user, done) => {

    done(null, user);

});



// =========================
// STEAM AUTH
// =========================

passport.use(

    new SteamStrategy(

        {

            returnURL: 'http://localhost:3000/auth/steam/return',

            realm: 'http://localhost:3000/',

            apiKey: '7F10EAC7B5A170BB04EDB31EF2B470F7'

        },



        async function(identifier, profile, done) {

            try {

                // =========================
                // FIND USER
                // =========================

                let user = await User.findOne({

                    steamId: profile.id

                });



                // =========================
                // CREATE USER
                // =========================

                if (!user) {

                    user = await User.create({

                        steamId: profile.id,

                        nickname: profile.displayName,

                        avatar: profile.photos[2].value,

                        balance: 0,

                        inventory: [],

                        history: [],

                        tradeUrl: '',

                        stats: {

                            openedCases: 0,

                            upgrades: 0

                        }

                    });

                    console.log('NEW USER CREATED');

                }



                // =========================
                // UPDATE USER DATA
                // =========================

                user.nickname = profile.displayName;

                user.avatar = profile.photos[2].value;

                await user.save();



                return done(null, user);

            }

            catch (err) {

                console.log(err);

            }

        }

    )

);



// =========================
// STEAM LOGIN
// =========================

app.get(

    '/auth/steam',

    passport.authenticate('steam', {

        failureRedirect: '/'

    })

);



// =========================
// STEAM RETURN
// =========================

app.get(

    '/auth/steam/return',

    passport.authenticate('steam', {

        failureRedirect: '/'

    }),

    function(req, res) {

        res.redirect('/');

    }

);



// =========================
// GET USER
// =========================

app.get('/api/user', async (req, res) => {

    if (!req.user) {

        return res.json(null);

    }

    try {

        const user = await User.findOne({

            steamId: req.user.steamId

        });

        res.json({

            steamId: user.steamId,

            nickname: user.nickname,

            avatar: user.avatar,

            balance: user.balance,

            inventory: user.inventory,

            history: user.history,

            tradeUrl: user.tradeUrl,

            stats: user.stats

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            error: 'SERVER ERROR'

        });

    }

});



// =========================
// LOGOUT
// =========================

app.get('/logout', (req, res) => {

    req.logout(() => {

        res.redirect('/');

    });

});



// =========================
// STATIC FILES
// =========================

app.use(

    express.static(

        path.join(__dirname, '../public')

    )

);



// =========================
// INDEX
// =========================

app.get('/', (req, res) => {

    res.sendFile(

        path.join(__dirname, '../public/index.html')

    );

});



// =========================
// SERVER START
// =========================

app.listen(3000, () => {

    console.log('SERVER STARTED');

});

