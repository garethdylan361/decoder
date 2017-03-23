describe("Decoder", function() {
  var Decoder = require('../lib/Decoder');
  var decoder;

  beforeEach(function() {
    decoder = Decoder;
  });

  it("should be decode a line", function() {
    expect(decoder.decode("1JKJ'pz'{ol'{yhklthyr'vm'{ol'Jvu{yvs'Kh{h'Jvywvyh{pvu5"))
        .toEqual('*CDC is the trademark of the Control Data Corporation.');
  });

  it("should be able to decode all three lines", function() {
    expect(decoder.decode(
        "1JKJ'pz'{ol'{yhklthyr'vm'{ol'Jvu{yvs'Kh{h'Jvywvyh{pvu5" +
        "1PIT'pz'h'{yhklthyr'vm'{ol'Pu{lyuh{pvuhs'I|zpulzz'Thjopul'Jvywvyh{pvu5"+
        "1KLJ'pz'{ol'{yhklthyr'vm'{ol'Kpnp{hs'Lx|pwtlu{'Jvywvyh{pvu5"))
        .toEqual(
            "*CDC is the trademark of the Control Data Corporation."+
            "*IBM is a trademark of the International Business Machine Corporation."+
            "*DEC is the trademark of the Digital Equipment Corporation.");
  });

});
