const aeris = new AerisWeather('fOjQxkH53q0NU5795jqMJ', 'iYhlXwTxc0CaoxeEQkHFlf5cnYRacIBn7UvoW9j0');
aeris.on('ready', () => {
    const view = new aeris.wxblox.views.Main('#widget');
    view.load({
        p: 'minneapolis,mn'
    });
});