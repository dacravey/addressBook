describe('addressBook', function() {
  it("allows a user to enter name and address and stores it for retrieval", function() {
    expect(addressBook("Dr Who", "Tardis", "Gallifrey", "90020")).to.equal("Dr Who", "Tardis", "Gallifrey", "90020");
  });

});
