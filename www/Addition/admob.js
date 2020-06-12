//------- Admob ----------
var admobid = {
  //--- Test Ads ---
  // banner: 'ca-app-pub-3940256099942544/6300978111',
  // interstitial: 'ca-app-pub-3940256099942544/1033173712',
  // rewardvideo: 'ca-app-pub-3940256099942544/5224354917'
  //--- Live Ads ---
  //It's interstitial Video ad
  banner: 'ca-app-pub-5039568744793885/7351446330',
  interstitial: 'ca-app-pub-5039568744793885/9211322913',
  rewardvideo: 'ca-app-pub-5039568744793885/6968302959'
};

function initAds() {
  if (!AdMob) {
    alert('admob plugin not ready');
    document.getElementById('status').innerHTML = 'Admob plugin not ready';
    return;
  }

  initAd();
  document.getElementById('status').innerHTML = 'Ads initialized';
}

function initAd() {
  var defaultOptions = {
    bannerId: admobid.banner,
    interstitialId: admobid.interstitial,
    adSize: 'SMART_BANNER',
    // width: integer, // valid when set adSize 'CUSTOM'
    // height: integer, // valid when set adSize 'CUSTOM'
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
    bgColor: 'black', // color name, or '#RRGGBB'
    // x: integer,		// valid when set position to 0 / POS_XY
    // y: integer,		// valid when set position to 0 / POS_XY
    isTesting: false, // set to true, to receiving test ad for testing purpose
    autoShow: false // auto show interstitial ad when loaded, set to false if prepare/show
  };
  AdMob.setOptions(defaultOptions);

  registerAdEvents();
  AdMob.prepareInterstitial({ adId: admobid.interstitial, autoShow: false });
  AdMob.createBanner({
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    autoShow: false //Set it to 'true' if u want the banner-ad to show as soon as page loads 
  });
  AdMob.prepareRewardVideoAd({
    adId: admobid.rewardvideo,
    autoShow: false
  });
}

// optional, in case respond to events or handle error
function registerAdEvents() {
  // new events, with variable to differentiate: adNetwork, adType, adEvent
  // comment out for production
  // document.addEventListener('onAdFailLoad', function(data) {
  //   var errorMsg =
  //     'error: ' +
  //     data.error +
  //     ', reason: ' +
  //     data.reason +
  //     ', adNetwork:' +
  //     data.adNetwork +
  //     ', adType:' +
  //     data.adType +
  //     ', adEvent:' +
  //     data.adEvent;

  //   document.getElementById('status').innerHTML = errorMsg;
  // });
  document.addEventListener('onAdLoaded', function(data) {});
  document.addEventListener('onAdPresent', function(data) {});
  document.addEventListener('onAdLeaveApp', function(data) {});
  document.addEventListener('onAdDismiss', function(data) {
    prepareAd(data.adType);
    if (data.adType === 'rewardvideo') {
      //-- give your reward here --
      //alert('Here is your reward');
    }
  });
}

//Set them to true if u want the other types of ad to autoShow on page loading
function prepareAd(type) {
  if (type === 'interstitial') {
    AdMob.prepareInterstitial({
      adId: admobid.interstitial,
      autoShow: false
    });
  }
  if (type === 'rewardvideo') {
    AdMob.prepareRewardVideoAd({
      adId: admobid.rewardvideo,
      autoShow: false
    });
  }
  if (type === 'all') {
    initApp();

    AdMob.prepareInterstitial({
      adId: admobid.interstitial,
      autoShow: false
    });
    AdMob.prepareRewardVideoAd({
      adId: admobid.rewardvideo,
      autoShow: false
    });
  }
}

//--- called from onClick() inline in html pages ---
function showBannerAd() {
  console.log('Banner Ad Called');
  AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
}

function showInterstitialAd() {
  //alert('Interstitial Video Ad Called');
  AdMob.showInterstitial();
}

function showRewardedVideoAd() {
  //alert('Rewarded Video Ad Called');
  AdMob.showRewardVideoAd();
}
