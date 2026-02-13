import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TabItem = {
    icon: keyof typeof Ionicons.glyphMap;
    activeIcon: keyof typeof Ionicons.glyphMap;
};

const TABS: TabItem[] = [
    { icon: 'home-outline', activeIcon: 'home' },
    { icon: 'people-outline', activeIcon: 'people' },
    { icon: 'calendar-outline', activeIcon: 'calendar' },
    { icon: 'chatbubble-outline', activeIcon: 'chatbubble' },
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const BAR_MARGIN = 16;
const BAR_HEIGHT = 70;
const CIRCLE_SIZE = 70;

type Props = {
    activeTab?: number;
    onTabPress?: (index: number) => void;
    onAddPress?: () => void;
};

export default function BottomBar({ activeTab = 0, onTabPress, onAddPress }: Props) {
    const [selectedTab, setSelectedTab] = useState(activeTab);

    const handlePress = (index: number) => {
        setSelectedTab(index);
        onTabPress?.(index);
    };

    return (
        <View
            style={{
                position: 'absolute',
                bottom: 30,
                left: BAR_MARGIN,
                right: BAR_MARGIN,
                height: BAR_HEIGHT,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            {/* Main pill-shaped bar */}
            <View
                style={{
                    flex: 1,
                    height: BAR_HEIGHT,
                    backgroundColor: '#2A2D35',
                    borderRadius: BAR_HEIGHT / 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                }}>
                {/* Tab icons */}
                {TABS.map((tab, index) => {
                    const isActive = selectedTab === index;
                    return (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.7}
                            onPress={() => handlePress(index)}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                            }}>
                            <Ionicons
                                name={isActive ? tab.activeIcon : tab.icon}
                                size={26}
                                color={isActive ? '#6C5CE7' : '#8B8E98'}
                            />
                            {isActive && (
                                <View
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: 3,
                                        backgroundColor: '#6C5CE7',
                                        marginTop: 4,
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* + Circle button */}
            <View
                style={{
                    marginLeft: -CIRCLE_SIZE / 3,
                    width: CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    borderRadius: CIRCLE_SIZE / 2,
                    backgroundColor: '#1A1D24',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onAddPress}
                    style={{
                        width: CIRCLE_SIZE - 8,
                        height: CIRCLE_SIZE - 8,
                        borderRadius: (CIRCLE_SIZE - 8) / 2,
                        backgroundColor: '#6C5CE7',
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowColor: '#6C5CE7',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.4,
                        shadowRadius: 12,
                        elevation: 10,
                    }}>
                    <Ionicons name="add" size={32} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}