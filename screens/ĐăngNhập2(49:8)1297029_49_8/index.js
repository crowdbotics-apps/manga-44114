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
      <View style={styles.View_52_44}>
        <View style={styles.View_52_25}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/097f3547-88d0-4e1f-bbdf-b8b4501419ce"
            }}
            style={styles.ImageBackground_51_18}
          />
          <View style={styles.View_52_24}>
            <Text style={styles.Text_52_24}>Nữ cường</Text>
          </View>
        </View>
        <View style={styles.View_52_26}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f9bdf2c-8566-4d04-a0d8-733a394e2a07"
            }}
            style={styles.ImageBackground_51_19}
          />
          <View style={styles.View_52_23}>
            <Text style={styles.Text_52_23}>Mạt thế</Text>
          </View>
        </View>
        <View style={styles.View_52_27}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03737d96-1812-4c7e-afff-eee5c3a25677"
            }}
            style={styles.ImageBackground_51_20}
          />
          <View style={styles.View_52_22}>
            <Text style={styles.Text_52_22}>Đồng nhân</Text>
          </View>
        </View>
        <View style={styles.View_52_41}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/638dc8a4-649e-405c-af71-867d691354e7"
            }}
            style={styles.ImageBackground_51_21}
          />
          <View style={styles.View_52_21}>
            <Text style={styles.Text_52_21}>Ngôn tình</Text>
          </View>
        </View>
        <View style={styles.View_52_40}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7981b0a1-2d86-4cd9-9aa1-1bb803d062bf"
            }}
            style={styles.ImageBackground_51_22}
          />
          <View style={styles.View_52_20}>
            <Text style={styles.Text_52_20}>Trọng sinh</Text>
          </View>
        </View>
        <View style={styles.View_52_38}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4372bcc4-e5d9-4659-8854-03a5f8fa4a6e"
            }}
            style={styles.ImageBackground_51_23}
          />
          <View style={styles.View_52_18}>
            <Text style={styles.Text_52_18}>Lịch sử</Text>
          </View>
        </View>
        <View style={styles.View_52_37}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/139bd26b-5599-46c8-9a5d-640fb3db2894"
            }}
            style={styles.ImageBackground_51_24}
          />
          <View style={styles.View_52_19}>
            <Text style={styles.Text_52_19}>Xuyên không</Text>
          </View>
        </View>
        <View style={styles.View_52_36}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7855cb37-3186-42c6-a40a-e236fabc288d"
            }}
            style={styles.ImageBackground_51_25}
          />
          <View style={styles.View_52_16}>
            <Text style={styles.Text_52_16}>Hài hước</Text>
          </View>
        </View>
        <View style={styles.View_52_35}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f299107-2bbf-4656-8c83-36e0f9d8e5fe"
            }}
            style={styles.ImageBackground_51_26}
          />
          <View style={styles.View_52_17}>
            <Text style={styles.Text_52_17}>Đam mỹ</Text>
          </View>
          <View style={styles.View_21_565} />
        </View>
        <View style={styles.View_52_34}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec3264d3-cab2-40fd-96da-aee499f78398"
            }}
            style={styles.ImageBackground_51_15}
          />
          <View style={styles.View_52_15}>
            <Text style={styles.Text_52_15}>Hệ thống</Text>
          </View>
        </View>
        <View style={styles.View_52_33}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0459981-8f15-4cdd-9f67-68a1fc762566"
            }}
            style={styles.ImageBackground_51_16}
          />
          <View style={styles.View_52_14}>
            <Text style={styles.Text_52_14}>Sắc hiệp</Text>
          </View>
        </View>
        <View style={styles.View_52_32}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57931cb2-4c66-4ef7-9910-a4e236a44c71"
            }}
            style={styles.ImageBackground_51_17}
          />
          <View style={styles.View_52_13}>
            <Text style={styles.Text_52_13}>Khoa huyễn</Text>
          </View>
        </View>
        <View style={styles.View_52_31}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c448612a-b911-4ee3-9452-64bd2d9f47fd"
            }}
            style={styles.ImageBackground_51_14}
          />
          <View style={styles.View_52_12}>
            <Text style={styles.Text_52_12}>Dị năng</Text>
          </View>
        </View>
        <View style={styles.View_52_30}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a1bafa0-ae78-4ffb-8551-863226e3d045"
            }}
            style={styles.ImageBackground_51_13}
          />
          <View style={styles.View_52_11}>
            <Text style={styles.Text_52_11}>Đô thị</Text>
          </View>
        </View>
        <View style={styles.View_52_29}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dabd3c19-3579-4232-802b-736d5c416956"
            }}
            style={styles.ImageBackground_51_12}
          />
          <View style={styles.View_52_7}>
            <Text style={styles.Text_52_7}>Kiếm hiệp</Text>
          </View>
        </View>
        <View style={styles.View_52_28}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fb233db-3a89-45dd-9de3-3fbafe1050d7"
            }}
            style={styles.ImageBackground_51_11}
          />
          <View style={styles.View_52_10}>
            <Text style={styles.Text_52_10}>Dị Giới</Text>
          </View>
        </View>
        <View style={styles.View_57_194}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83c7fa4d-ace2-4e17-ae4b-84152be7807b"
            }}
            style={styles.ImageBackground_57_195}
          />
          <View style={styles.View_57_196}>
            <Text style={styles.Text_57_196}>Huyền huyễn</Text>
          </View>
          <View style={styles.View_152_164}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69c7c21a-fdc5-4568-a11c-67a0b8dbfe23"
              }}
              style={styles.ImageBackground_152_165}
            />
          </View>
        </View>
        <View style={styles.View_52_6}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52655383-2c4a-4a18-be1c-c1f96392a672"
            }}
            style={styles.ImageBackground_51_9}
          />
          <View style={styles.View_52_0}>
            <Text style={styles.Text_52_0}>Tiên hiệp</Text>
          </View>
        </View>
        <View style={styles.View_9_739}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf08525f-0af0-4cc5-a77a-baa5cd04d900"
            }}
            style={styles.ImageBackground_9_740}
          />
        </View>
      </View>
      <View style={styles.View_107_136}>
        <View style={styles.View_107_137} />
        <View style={styles.View_324_757}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d8fe2e2-5e31-484d-8a28-fb186591e1de"
            }}
            style={styles.ImageBackground_324_751}
          />
          <View style={styles.View_324_752}>
            <Text style={styles.Text_324_752}>
              Tìm kiếm tiêu đề, tác giả,...
            </Text>
          </View>
          <View style={styles.View_324_753}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/446779f8-0e45-4e94-8dd4-6714bee9ce50"
              }}
              style={styles.ImageBackground_324_754}
            />
          </View>
        </View>
        <View style={styles.View_49_30}>
          <Text style={styles.Text_49_30}>Chọn thêm chủ đề</Text>
        </View>
        <View style={styles.View_49_12}>
          <Text style={styles.Text_49_12}>Welcome to Truyens</Text>
        </View>
      </View>
      <View style={styles.View_324_766}>
        <View style={styles.View_324_764} />
        <View style={styles.View_324_763}>
          <TouchableOpacity
            style={styles.TouchableOpacity_324_762}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_168"))
            }
          >
            <Text style={styles.Text_324_762}>Bỏ qua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_57_154}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("57_168"))
            }
          >
            <View style={styles.View_57_155} />
            <View style={styles.View_57_156}>
              <Text style={styles.Text_57_156}>Xong</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_49_14}>
        <View style={styles.View_I49_14_107_138} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/431bfbf2-7d80-4264-8eb8-5a1fc81f0e9a"
          }}
          style={styles.ImageBackground_I49_14_36_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/756cd805-710d-44da-bc75-f12d167b8137"
          }}
          style={styles.ImageBackground_I49_14_36_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99cffe94-2631-467e-9981-f96bf2eb12fb"
          }}
          style={styles.ImageBackground_I49_14_36_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b5596b6-07ce-4102-8fd6-08213eb100e6"
          }}
          style={styles.ImageBackground_I49_14_36_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4ab2ecf-4b5f-4d42-a3c3-a0c9175dece5"
          }}
          style={styles.ImageBackground_I49_14_36_21}
        />
        <View style={styles.View_I49_14_1_752}>
          <Text style={styles.Text_I49_14_1_752}>19: 00</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("145%") },
  View_52_44: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("91%"),
    minHeight: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_52_25: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("77%")
  },
  ImageBackground_51_18: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_24: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_26: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("77%")
  },
  ImageBackground_51_19: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_23: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_27: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77%")
  },
  ImageBackground_51_20: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_22: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_41: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("62%")
  },
  ImageBackground_51_21: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_21: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_40: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("62%")
  },
  ImageBackground_51_22: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_20: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_38: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%")
  },
  ImageBackground_51_23: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_18: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_37: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("46%")
  },
  ImageBackground_51_24: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_19: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_36: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("46%")
  },
  ImageBackground_51_25: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_16: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_35: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46%")
  },
  ImageBackground_51_26: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_17: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_565: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_52_34: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("31%")
  },
  ImageBackground_51_15: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_15: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_33: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%")
  },
  ImageBackground_51_16: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_14: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_32: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  ImageBackground_51_17: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_13: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_31: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("15%")
  },
  ImageBackground_51_14: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_12: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_30: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("15%")
  },
  ImageBackground_51_13: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_11: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_29: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%")
  },
  ImageBackground_51_12: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_7: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_28: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  ImageBackground_51_11: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_10: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_194: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%")
  },
  ImageBackground_57_195: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_57_196: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_57_196: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_164: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_152_165: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_52_6: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_51_9: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_52_0: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_52_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_739: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_9_740: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_107_136: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_107_137: {
    width: wp("100%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_324_757: {
    width: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_324_751: {
    width: wp("87%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_324_752: {
    width: wp("80%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_324_752: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_324_753: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_324_754: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_49_30: {
    width: wp("87%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_49_30: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_12: {
    width: wp("87%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_49_12: {
    color: "rgba(53, 57, 64, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_324_766: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114%")
  },
  View_324_764: {
    width: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_324_763: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("17%")
  },
  TouchableOpacity_324_762: {
    width: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_324_762: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_57_154: {
    width: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_57_155: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_57_156: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_57_156: {
    color: "rgba(255, 240, 240, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_14: {
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
  View_I49_14_107_138: {
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
  ImageBackground_I49_14_36_17: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  ImageBackground_I49_14_36_18: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("3%")
  },
  ImageBackground_I49_14_36_19: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%")
  },
  ImageBackground_I49_14_36_20: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I49_14_36_21: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  View_I49_14_1_752: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I49_14_1_752: {
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
