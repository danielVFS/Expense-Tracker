import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { COLORS, FONTS, SIZES, icons } from "../constants";

const Home = () => {
  function renderNavBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 70,
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", width: 50 }}
          onPress={() => alert("BACK")}
        >
          <Image
            source={icons.back_arrow}
            style={{ width: 30, height: 30, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: 50,
          }}
          onPress={() => alert("info")}
        >
          <Image
            source={icons.more}
            style={{ width: 30, height: 30, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <View>
          <Text
            style={{ color: COLORS.primary, ...FONTS.h2, fontWeight: "bold" }}
          >
            My Expenses
          </Text>
          <Text style={{ color: COLORS.darkgray, ...FONTS.h3 }}>
            Summary (private)
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: COLORS.lightGray,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.calendar}
              style={{ width: 20, height: 20, tintColor: COLORS.lightBlue }}
            />
          </View>
          <View style={{ marginLeft: SIZES.padding }}>
            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
              11 Nov, 2020
            </Text>
            <Text
              style={{
                color: COLORS.darkgray,
                ...FONTS.body3,
                fontWeight: "500",
              }}
            >
              18% than last month
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {renderNavBar()}

      {renderHeader()}
    </View>
  );
};

export default Home;
