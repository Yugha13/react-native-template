import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TabItem = {
    icon: keyof typeof Ionicons.glyphMap;
    isActive?: boolean;
};

const TABS: TabItem[] = [
    { icon: 'lock-closed-outline' },
    { icon: 'home', isActive: true },
    { icon: 'grid-outline' },
    { icon: 'person-outline' },
];

export default function BottomBar() {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 28,
                left: 30,
                right: 30,
                backgroundColor: '#fff',
                borderRadius: 40,
                height: 68,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingHorizontal: 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.25,
                shadowRadius: 20,
                elevation: 12,
            }}>
            {TABS.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.7}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        ...(tab.isActive
                            ? { backgroundColor: '#E84333' }
                            : {}),
                    }}>
                    <Ionicons
                        name={tab.icon}
                        size={tab.isActive ? 22 : 24}
                        color={tab.isActive ? '#fff' : '#bbb'}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
}
