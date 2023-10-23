import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        style={styles.TouchableOpacity_5_751}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("39_294"))
        }
      >
        <View style={styles.View_57_113} />
        <View style={styles.View_57_114}>
          <Text style={styles.Text_57_114}>Đăng ký</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_57_128}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_106"))
        }
      >
        <View style={styles.View_57_129} />
        <View style={styles.View_57_130}>
          <Text style={styles.Text_57_130}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_10_364}>
        <View style={styles.View_10_366}>
          <View style={styles.View_10_339}>
            <View style={styles.View_10_340}>
              <Text style={styles.Text_10_340}>
                Nơi có những giây phút đọc truyên vui vẻ
              </Text>
            </View>
            <View style={styles.View_356_768}>
              <View style={styles.View_356_769}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36f6506a-5312-4fff-a03c-8bf7915c01ac"
                  }}
                  style={styles.ImageBackground_356_770}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_10_84}>
            <View style={styles.View_10_90}>
              <Text style={styles.Text_10_90}>
                Nơi chứa vô vàn đầu truyện dành cho bạn
              </Text>
            </View>
            <View style={styles.View_364_2}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cf8c09d-8b21-483b-a0a0-8c6623dba154"
                }}
                style={styles.ImageBackground_44_94}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9064596a-9cb6-44bc-8971-196c3fa13839"
                }}
                style={styles.ImageBackground_356_765}
              />
            </View>
          </View>
          <View style={styles.View_2_56}>
            <View style={styles.View_2_38}>
              <Text style={styles.Text_2_38}>Đọc cùng Truyens</Text>
            </View>
            <View style={styles.View_364_1}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/056f5507-ac9f-47ce-bbfe-d1087c55d1d3"
                }}
                style={styles.ImageBackground_44_93}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a94ee35d-6829-4ce1-81b4-fb0d9bff4760"
                }}
                style={styles.ImageBackground_356_751}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3383633-1a40-4b52-8dea-3f9debe41048"
          }}
          style={styles.ImageBackground_2_58}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4439723e-3317-40bc-9214-f35b35ec2bf9"
        }}
        style={styles.ImageBackground_5_759}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d565d867-ba4e-44fa-b2a0-44f51f8b8239"
        }}
        style={styles.ImageBackground_5_761}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86e82c80-8183-4e2d-a81e-2c13623ee33e"
        }}
        style={styles.TouchableOpacity_5_762}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("49_8"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9f34b90-5748-407c-9c5f-5a0bd5002979"
        }}
        style={styles.ImageBackground_5_756}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f6a22bb-86d6-441e-97d4-eac091e19e68"
        }}
        style={styles.ImageBackground_5_764}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83ee109c-c61b-4167-a58e-51b2dcfc1870"
        }}
        style={styles.ImageBackground_5_770}
      />
      <View style={styles.View_39_274}>
        <View style={styles.View_I39_274_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9689bf11-1b4f-4d29-ad15-65b9ffd8be21"
          }}
          style={styles.ImageBackground_I39_274_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c02bbe4-52c7-4816-ab5b-ac4e34cfd576"
          }}
          style={styles.ImageBackground_I39_274_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dadd957-8249-4bf1-b948-a2b26ed07492"
          }}
          style={styles.ImageBackground_I39_274_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed1abd50-d04b-457d-98ed-4f54c62461e1"
          }}
          style={styles.ImageBackground_I39_274_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbec3710-f7ba-4168-9753-f96ff7ad351d"
          }}
          style={styles.ImageBackground_I39_274_36_21}
        />
        <View style={styles.View_I39_274_1_752}>
          <Text style={styles.Text_I39_274_1_752}>19: 00</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  TouchableOpacity_5_751: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_113: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(147, 228, 193, 1)",
    borderColor: "rgba(227, 203, 203, 1)",
    borderWidth: 1
  },
  View_57_114: {
    flexGrow: 1,
    width: wp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_114: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_57_128: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_129: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 138, 126, 1)"
  },
  View_57_130: {
    flexGrow: 1,
    width: wp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10_364: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_366: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10_339: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("188%"),
    top: hp("5%")
  },
  View_10_340: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    justifyContent: "center"
  },
  Text_10_340: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_356_768: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_356_769: {
    width: wp("78%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_356_770: {
    width: wp("78%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10_84: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%"),
    top: hp("3%")
  },
  View_10_90: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_10_90: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_364_2: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_44_94: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_356_765: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_2_56: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_2_38: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_2_38: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_364_1: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_44_93: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_356_751: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    resizeMode: "cover"
  },
  ImageBackground_2_58: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("56%")
  },
  ImageBackground_5_759: {
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("75%")
  },
  ImageBackground_5_761: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("75%")
  },
  TouchableOpacity_5_762: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("76%"),
    resizeMode: "cover"
  },
  ImageBackground_5_756: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("75%")
  },
  ImageBackground_5_764: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("76%"),
    resizeMode: "cover"
  },
  ImageBackground_5_770: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("76%"),
    resizeMode: "cover"
  },
  View_39_274: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I39_274_107_138: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I39_274_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I39_274_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I39_274_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I39_274_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I39_274_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I39_274_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I39_274_1_752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
