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
        style={styles.TouchableOpacity_57_143}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("46_173"))
        }
      >
        <View style={styles.View_57_144} />
        <View style={styles.View_57_145}>
          <Text style={styles.Text_57_145}>Tiếp</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_46_19}>
        <View style={styles.View_46_13}>
          <View style={styles.View_57_180} />
          <View style={styles.View_46_14}>
            <Text style={styles.Text_46_14}>2008</Text>
          </View>
          <View style={styles.View_46_15}>
            <Text style={styles.Text_46_15}>2001</Text>
          </View>
          <View style={styles.View_46_16}>
            <Text style={styles.Text_46_16}>2002</Text>
          </View>
          <View style={styles.View_46_17}>
            <Text style={styles.Text_46_17}>2003</Text>
          </View>
          <View style={styles.View_46_18}>
            <Text style={styles.Text_46_18}>2012</Text>
          </View>
        </View>
        <View style={styles.View_46_4}>
          <View style={styles.View_57_179} />
          <View style={styles.View_46_0}>
            <Text style={styles.Text_46_0}>Nov</Text>
          </View>
          <View style={styles.View_46_5}>
            <Text style={styles.Text_46_5}>Tháng 2</Text>
          </View>
          <View style={styles.View_46_1}>
            <Text style={styles.Text_46_1}>Tháng 3</Text>
          </View>
          <View style={styles.View_46_2}>
            <Text style={styles.Text_46_2}>Tháng 4</Text>
          </View>
          <View style={styles.View_46_6}>
            <Text style={styles.Text_46_6}>Mar</Text>
          </View>
        </View>
        <View style={styles.View_46_7}>
          <View style={styles.View_57_177} />
          <View style={styles.View_46_8}>
            <Text style={styles.Text_46_8}>01</Text>
          </View>
          <View style={styles.View_46_9}>
            <Text style={styles.Text_46_9}>15</Text>
          </View>
          <View style={styles.View_46_10}>
            <Text style={styles.Text_46_10}>16</Text>
          </View>
          <View style={styles.View_46_11}>
            <Text style={styles.Text_46_11}>17</Text>
          </View>
          <View style={styles.View_46_12}>
            <Text style={styles.Text_46_12}>05</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c3e22c6-407a-4273-ae3f-6410097d4bfb"
          }}
          style={styles.ImageBackground_46_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/448a6409-5472-4681-958d-d30ff22bdc28"
          }}
          style={styles.ImageBackground_46_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac2b6efc-85f4-4761-960f-31fc2e637c5d"
          }}
          style={styles.ImageBackground_46_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78b9d815-cf67-4c20-a278-9018c64ddc21"
          }}
          style={styles.ImageBackground_46_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/120b6ce0-34e9-46d7-9a83-7d8674f82550"
          }}
          style={styles.ImageBackground_46_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36823fd3-617e-44a8-acdf-49a312756cbc"
          }}
          style={styles.ImageBackground_46_22}
        />
      </View>
      <View style={styles.View_44_130}>
        <Text style={styles.Text_44_130}>Ngày sinh của bạn là gì?</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_44_136}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("39_294"))
        }
      >
        <View style={styles.View_I44_136_130_319} />
        <View style={styles.View_I44_136_87_136}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0b82688-c8fa-447d-a8da-0bbde7754d7d"
            }}
            style={styles.ImageBackground_I44_136_87_137}
          />
        </View>
        <View style={styles.View_I44_136_2_114}>
          <Text style={styles.Text_I44_136_2_114}>Đăng ký</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_46_80}>
        <View style={styles.View_46_76}>
          <View style={styles.View_46_74} />
          <View style={styles.View_46_75}>
            <Text style={styles.Text_46_75}>Nam</Text>
          </View>
        </View>
        <View style={styles.View_46_77}>
          <View style={styles.View_46_78} />
          <View style={styles.View_46_79}>
            <Text style={styles.Text_46_79}>Nữ</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_46_54}>
        <Text style={styles.Text_46_54}>Giới tính của bạn là gì?</Text>
      </View>
      <View style={styles.View_44_137}>
        <View style={styles.View_I44_137_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b12218ce-4046-4dd4-9627-d209ea615dc3"
          }}
          style={styles.ImageBackground_I44_137_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d134e6-d870-4d35-bbbe-3227bd09b362"
          }}
          style={styles.ImageBackground_I44_137_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67d1cdeb-3655-4bac-b5c4-6b5c62bd154e"
          }}
          style={styles.ImageBackground_I44_137_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae3f4496-6d48-4663-98a2-86ab14d859ed"
          }}
          style={styles.ImageBackground_I44_137_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0161eac5-cbe1-4058-938f-b224ccbff17f"
          }}
          style={styles.ImageBackground_I44_137_36_21}
        />
        <View style={styles.View_I44_137_1_752}>
          <Text style={styles.Text_I44_137_1_752}>19: 00</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  TouchableOpacity_57_143: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_144: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 138, 126, 1)"
  },
  View_57_145: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_19: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_46_13: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_180: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_46_14: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-5%"),
    justifyContent: "center"
  },
  Text_46_14: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_15: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_46_15: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_16: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_46_16: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_17: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_46_17: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_18: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_46_18: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_4: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_179: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_46_0: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-5%"),
    justifyContent: "center"
  },
  Text_46_0: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_5: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    justifyContent: "center"
  },
  Text_46_5: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_1: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_46_1: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_2: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_46_2: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_6: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_46_6: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_7: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_177: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_46_8: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-5%"),
    justifyContent: "center"
  },
  Text_46_8: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_9: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_46_9: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_10: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_46_10: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_11: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_46_11: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_12: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_46_12: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_46_24: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("9%")
  },
  ImageBackground_46_23: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("4%")
  },
  ImageBackground_46_25: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("9%")
  },
  ImageBackground_46_26: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("4%")
  },
  ImageBackground_46_21: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_46_22: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_44_130: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_44_130: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_44_136: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I44_136_130_319: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I44_136_87_136: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I44_136_87_137: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I44_136_2_114: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I44_136_2_114: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_80: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_46_76: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_46_74: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(207, 207, 207, 1)",
    borderWidth: 1
  },
  View_46_75: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_46_75: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_77: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  View_46_78: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 57, 64, 1)",
    borderColor: "rgba(53, 57, 64, 1)",
    borderWidth: 1
  },
  View_46_79: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_46_79: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_54: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_46_54: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_44_137: {
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
  View_I44_137_107_138: {
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
  ImageBackground_I44_137_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I44_137_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I44_137_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I44_137_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I44_137_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I44_137_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I44_137_1_752: {
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
