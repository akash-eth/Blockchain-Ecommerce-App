const mongoose = require('mongoose');

mongoose.connect(
    'Your Connection String',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

