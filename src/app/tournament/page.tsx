'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Player {
  _id: string;
  name: string;
  position: number;
}

interface Match {
  _id: string;
  player1: Player;
  player2: Player;
  winner: Player | null;
  round: number;
}

export default function TournamentPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // جلب قائمة اللاعبين
        const playersResponse = await fetch('/api/players');
        const playersData = await playersResponse.json();
        setPlayers(playersData);

        // جلب قائمة المباريات
        const matchesResponse = await fetch('/api/matches');
        const matchesData = await matchesResponse.json();
        setMatches(matchesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 p-6">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">بطولة 🅵🅾🆇</h1>
        </div>

        {/* أزرار البث والدسكورد */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://www.tiktok.com/@foxuae35"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-pink-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-700 transition-colors text-center"
          >
            شاهد البث المباشر
          </a>

          <a
            href="https://discord.gg/sjTAX8mF"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-center"
          >
            انضم للدسكورد
          </a>
        </div>

        {/* معلومات البطولة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* قائمة اللاعبين */}
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-blue-300">المشاركون</h2>
            {isLoading ? (
              <p className="text-white">جاري التحميل...</p>
            ) : players.length > 0 ? (
              <div className="space-y-2">
                {players.map((player) => (
                  <div key={player._id} className="text-white">
                    {player.position}. {player.name}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white">لا يوجد مشاركون حتى الآن</p>
            )}
          </div>

          {/* المباريات الحالية */}
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-blue-300">المباريات الحالية</h2>
            {isLoading ? (
              <p className="text-white">جاري التحميل...</p>
            ) : matches.length > 0 ? (
              <div className="space-y-4">
                {matches.map((match) => (
                  <div key={match._id} className="text-white bg-white/5 p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span>{match.player1?.name || 'لاعب 1'}</span>
                      <span className="text-yellow-400">VS</span>
                      <span>{match.player2?.name || 'لاعب 2'}</span>
                    </div>
                    {match.winner && (
                      <div className="mt-2 text-green-400 text-center">
                        الفائز: {match.winner.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white">لا توجد مباريات حالياً</p>
            )}
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3 text-blue-300">النتائج</h2>
            {isLoading ? (
              <p className="text-white">جاري التحميل...</p>
            ) : matches.some(match => match.winner) ? (
              <div className="space-y-2">
                {matches
                  .filter(match => match.winner)
                  .map((match) => (
                    <div key={match._id} className="text-white">
                      {match.winner?.name} فاز على {
                        match.winner._id === match.player1._id ? match.player2.name : match.player1.name
                      }
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-white">لم تنتهي أي مباراة بعد</p>
            )}
          </div>
        </div>

        {/* روابط التنقل */}
        <div className="text-center mt-8 space-x-4 rtl:space-x-reverse">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            صفحة التسجيل
          </a>
          <a
            href="https://www.foxuae35.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            الصفحة الرئيسية
          </a>
        </div>

        {/* حقوق الملكية */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          جميع الحقوق محفوظة{' '}
          <a 
            href="https://foxuae35.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            foxuae35.com
          </a>
        </div>
      </div>
    </main>
  );
}
