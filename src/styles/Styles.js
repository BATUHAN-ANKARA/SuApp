const RegisterVerificationStyle = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  mainText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#0D0F1E',
  },
  secondaryText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 14,
    color: '#0D0F1E',
    marginTop: 10,
    lineHeight: 20,
  },
  inputLabel: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#626D7C',
    marginTop: 10,
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'GothamRounded-Bold',
  },
  inputArea: {
    height: 56,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#ddd',
    color: '#0D0F1E',
    fontSize: 20,
    fontFamily: 'GothamRounded-Book',
    marginTop: 10,
  },
};

const RegisterVerificationStep2Style = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 70,
    height: 70,
    fontSize: 37,
    borderWidth: 2,
    borderColor: '#E4E6E9',
    textAlign: 'center',
    borderRadius: 12,
    color: '#626D7C',
    lineHeight: 70,
    fontFamily: 'GothamRounded-Bold',
  },
  focusCell: {
    borderColor: '#BFC9D6',
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  mainText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#0D0F1E',
  },
  secondaryText: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 14,
    color: '#0D0F1E',
    marginTop: 10,
    lineHeight: 25,
  },
  inputLabel: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 14,
    color: '#626D7C',
    marginTop: 10,
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'GothamRounded-Bold',
  },
  button: {
    height: 45,
    backgroundColor: '#4CC4DE',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    marginTop: 30,
  },
};

const HomeStyle = {
  container: {
    flex: 1,
    backgroundColor: '#4CC4DE',
    position: 'relative',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    backgroundColor: '#E8F9FD',
    flex: 1,
  },
  adressButton: {
    height: 40,
    width: '55%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFCFF',
    padding: 5,
    paddingHorizontal: 10,
  },
  tinytext: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 11,
    color: '#626D7C',
  },
  rowTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstOrderArea: {
    width: 290,
    height: 290,
    borderRadius: 999,
    backgroundColor: '#4CC4DE',
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstOrderText: {
    textAlign: 'center',
    position: 'absolute',
    fontFamily: 'GothamRounded-Bold',
    fontSize: 16,
    color: '#fff',
    bottom: 50,
  },
  welcomeText1: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 20,
    color: '#0D0F1E',
  },
  welcomeText2: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 20,
    color: '#0D0F1E',
  },
  campaignArea: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    marginLeft: 20,
  },
  campaignCard: {
    height: 120,
    width: 270,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF1EA',
    borderRadius: 15,
    padding: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  campaignText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 10,
    color: '#FF8642',
    marginBottom: 15,
  },
  campaignTextBold: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 16,
    color: '#FF8642',
  },
  lastOrderArea: {
    height: null,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  cell1: {
    height: 50,
    width: '50%',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#F2F2F2',
  },
  cell2: {
    height: 50,
    width: '50%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell3: {
    height: null,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cell4: {
    height: null,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cell5: {
    height: 65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastOrderButton: {
    height: 40,
    width: 240,
    backgroundColor: '#FF8642',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  productsAreaStart: {
    width: '100%',
    height: null,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    width: '48%',
    height: 225,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  productCardButton: {
    height: 24,
    width: 95,
    backgroundColor: '#4CC4DE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCardButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 10,
    color: '#fff',
  },
  parentScroll: {
    flex: 1,
    backgroundColor: '#E8F9FD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
  },
  dealersArea: {
    margin: 20,
  },
  dealersAreaTitle: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#626D7C',
  },
  dealersCard: {
    width: '100%',
    height: 130,
    padding: 20,
    backgroundColor: '#BDF3FF',
    borderRadius: 14,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealerLogoBox: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F9',
    borderWidth: 1,
    borderColor: '#E4E6E9',
    borderRadius: 12,
  },
  time: {
    fontFamily: 'GothamRounded-Light',
    color: '#626D7C',
    fontSize: 12,
  },
  dealerName: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#626D7C',
    lineHeight: 23,
  },
  minText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 11,
    color: '#626D7C',
    lineHeight: 23,
  },
  minCost: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 11,
    color: '#626D7C',
    lineHeight: 23,
    marginLeft: 5,
  },
};

const ProfileStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  accountInfoCell: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  accountInfoCellName: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#4CC4DE',
  },
  accountInfoCellPhone: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 12,
    color: '#626D7C',
  },
  column: {
    height: 40,
    justifyContent: 'space-between',
  },
  standartCell: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  standartCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#626D7C',
    marginLeft: 20,
  },
  outCell: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  outCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#FF8642',
    marginLeft: 20,
  },
};

const ProductsStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  infoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  dealerLogoBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F9',
    borderWidth: 1,
    borderColor: '#E4E6E9',
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'GothamRounded-Light',
    color: '#626D7C',
    fontSize: 12,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  dealerName: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#626D7C',
    lineHeight: 23,
  },
  minText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 11,
    color: '#626D7C',
    lineHeight: 23,
  },
  minCost: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 11,
    color: '#626D7C',
    lineHeight: 23,
    marginLeft: 5,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#E4E6E9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  filterButtonText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 12,
    color: '#0D0F1E',
  },
  productCard: {
    backgroundColor: '#fff',
    width: '48%',
    height: 225,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  productsArea: {
    width: '100%',
    height: null,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  welcomeText2: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 20,
    color: '#0D0F1E',
  },
  productCardButton: {
    height: 24,
    width: 95,
    backgroundColor: '#4CC4DE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCardButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 10,
    color: '#fff',
  },
  productType: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#0D0F1E',
  },
};

const ProfileInfoStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  standartCell: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  disableCell: {
    height: 80,
    width: '100%',
    backgroundColor: '#F5F6F9',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  disableCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#626D7C',
  },
  standartCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#626D7C',
  },
  outCell: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  outCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#FF8642',
    marginLeft: 20,
  },
  inputArea: {
    height: 40,
    fontSize: 15,
    fontFamily: 'GothamRounded-Medium',
    color: '#0D0F1E',
  },
};

const AddressInvoiceInfoStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
};

const MyAdressesStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  statusText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#626D7C',
  },
  standartCell: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  addressText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 13,
    color: '#626D7C',
  },
  button: {
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CC4DE',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 16,
    color: '#fff',
  },
};

const MyInvoicesStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  statusText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#626D7C',
  },
  button: {
    height: 45,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CC4DE',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 16,
    color: '#fff',
  },
};

const InstittutionInvoiceStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  standartCell: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  disableCell: {
    height: 80,
    width: '100%',
    backgroundColor: '#F5F6F9',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  disableCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#626D7C',
  },
  standartCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#626D7C',
  },
  outCell: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  outCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#FF8642',
    marginLeft: 20,
  },
  inputArea: {
    height: 40,
    fontSize: 15,
    fontFamily: 'GothamRounded-Medium',
    color: '#0D0F1E',
  },
  button: {
    width: '50%',
    height: 45,
    backgroundColor: '#4CC4DE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60,
    alignSelf: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 16,
    color: '#fff',
  },
  modalContent: {
    paddingTop: 30,
    alignItems: 'center',
    height: 175,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalMainText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#4CC4DE',
    lineHeight: 23,
  },
  modalSecondaryText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#0D0F1E',
    lineHeight: 23,
    marginTop: 5,
  },
};

const ApplicationSettingsStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  standartCell: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  standartCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#626D7C',
  },
  standartCellTextTiny: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 11,
    color: '#626D7C',
    marginTop: 5,
  },
};

const LastOrdersStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  standartCell: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E4E6E9',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  dealerLogoBox: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F9',
    borderWidth: 1,
    borderColor: '#E4E6E9',
    borderRadius: 12,
  },
  adressText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 13,
    color: '#626D7C',
  },
  timeText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: '#626D7C',
  },
  time: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 10,
    color: '#0D0F1E',
  },
  textArea: {
    marginLeft: 15,
    justifyContent: 'space-evenly',
    height: 60,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  costText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 13,
    color: '#4CC4DE',
  },
  statusText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 16,
    color: '#626D7C',
  },
};

const CartStyle = {
  container: {
    flex: 1,
    backgroundColor: '#4CC4DE',
    position: 'relative',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  body: {
    backgroundColor: '#E8F9FD',
    flex: 1,
  },
  adressButton: {
    height: 40,
    width: '55%',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFCFF',
    padding: 5,
    paddingHorizontal: 10,
  },
  tinytext: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 11,
    color: '#626D7C',
  },
  rowTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstOrderArea: {
    width: 290,
    height: 290,
    borderRadius: 999,
    backgroundColor: '#4CC4DE',
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstOrderText: {
    textAlign: 'center',
    position: 'absolute',
    fontFamily: 'GothamRounded-Bold',
    fontSize: 16,
    color: '#fff',
    bottom: 50,
  },
  welcomeText1: {
    fontFamily: 'GothamRounded-Light',
    fontSize: 20,
    color: '#0D0F1E',
  },
  welcomeText2: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 20,
    color: '#0D0F1E',
  },
  parentScroll: {
    flex: 1,
    backgroundColor: '#E8F9FD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 25,
  },
  scrollBody: {
    paddingHorizontal: 20,
    height: '100%',
  },
  bottomArea: {
    backgroundColor: '#fff',
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: -10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  nextButton: {
    width: 95,
    height: 30,
    borderRadius: 14,
    backgroundColor: '#4CC4DE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 12,
    color: '#fff',
  },
  cell1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 75,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E4E6E9',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealerLogoBox: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F9',
    borderColor: '#E4E6E9',
    borderRadius: 10,
    borderWidth: 1,
  },
  cell2: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.7,
    borderBottomColor: '#E4E6E9',
    padding: 20,
  },
  addButton: {
    width: 140,
    height: 35,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#4CC4DE',
    alignSelf: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cell3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E4E6E9',
    paddingHorizontal: 20,
  },
  cell5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 45,
    backgroundColor: '#BDF3FF',
    paddingHorizontal: 20,
  },
  counterArea: {
    height: 30,
    width: 100,
    backgroundColor: '#F5F6F9',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  countArea: {
    width: 30,
    height: 30,
    borderRadius: 14,
    backgroundColor: '#4CC4DE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniButtons: {
    width: 20,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dealerName: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#626D7C',
    marginLeft: 10,
  },
  productName: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 12,
    color: '#626D7C',
    lineHeight: 23,
  },
  productCost: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#0D0F1E',
    lineHeight: 23,
  },
  depositText: {
    fontFamily: 'GothamRounded-Book',
    fontSize: 11,
    color: '#626D7C',
    lineHeight: 23,
  },
  countText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#fff',
  },
  addProductText: {
    fontFamily: 'gothamRounded-Bold',
    fontSize: 12,
    color: '#fff',
    marginRight: 5,
  },
  cell3Text: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 13,
    color: '#626D7C',
    marginLeft: 20,
  },
  cell5Text: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 13,
    color: '#4CC4DE',
    marginLeft: 20,
  },
};

const PaymentTypeStyle = {
  container: {
    flex: 1,
    backgroundColor: '#E8F9FD',
  },
  header: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#4CC4DE',
  },
  title: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 20,
    color: '#fff',
  },
  headerButtonArea: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  activeCell: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  standartCell: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E4E6E9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  standartCellText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#626D7C',
    marginLeft: 20,
  },
  activeText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 15,
    color: '#0D0F1E',
  },
  normalText: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 12,
    color: '#0D0F1E',
    lineHeight: 23,
  },
  nextButton: {
    width: 95,
    height: 30,
    borderRadius: 14,
    backgroundColor: '#4CC4DE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 12,
    color: '#fff',
  },
  cell3Text: {
    fontFamily: 'GothamRounded-Medium',
    fontSize: 13,
    color: '#626D7C',
    marginLeft: 20,
  },
  productCost: {
    fontFamily: 'GothamRounded-Bold',
    fontSize: 14,
    color: '#0D0F1E',
    lineHeight: 23,
  },
};

export {
  RegisterVerificationStyle,
  RegisterVerificationStep2Style,
  HomeStyle,
  ProfileStyle,
  ProductsStyle,
  ProfileInfoStyle,
  AddressInvoiceInfoStyle,
  MyAdressesStyle,
  MyInvoicesStyle,
  InstittutionInvoiceStyle,
  ApplicationSettingsStyle,
  LastOrdersStyle,
  CartStyle,
  PaymentTypeStyle,
};
