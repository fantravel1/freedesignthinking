// Session Manager for Design Menus
// Handles starting, pausing, resuming, and completing design thinking sessions

class SessionManager {
    constructor() {
        this.storageKey = 'designThinkingSession';
        this.bookmarksKey = 'videoBookmarks';
        this.recentViewsKey = 'recentlyViewedVideos';
    }

    // ==========================================
    // SESSION MANAGEMENT
    // ==========================================

    // Start a new session
    startSession(menuId, menuData) {
        const session = {
            menuId: menuId,
            menuName: menuData.name,
            menuIcon: menuData.icon,
            menuColor: menuData.color,
            currentStep: 0, // 0-4 for the 5 steps
            completedSteps: [],
            startTime: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            activities: menuData.activities,
            timeEstimate: menuData.timeEstimate,
            stepTimes: {} // Track time spent on each step
        };

        localStorage.setItem(this.storageKey, JSON.stringify(session));
        console.log('✅ Session started:', session);
        return session;
    }

    // Get current active session
    getCurrentSession() {
        const sessionData = localStorage.getItem(this.storageKey);
        return sessionData ? JSON.parse(sessionData) : null;
    }

    // Check if there's an active session
    hasActiveSession() {
        return this.getCurrentSession() !== null;
    }

    // Update session progress
    updateSession(updates) {
        const session = this.getCurrentSession();
        if (!session) return null;

        const updatedSession = {
            ...session,
            ...updates,
            lastUpdated: new Date().toISOString()
        };

        localStorage.setItem(this.storageKey, JSON.stringify(updatedSession));
        console.log('📝 Session updated:', updatedSession);
        return updatedSession;
    }

    // Mark current step as complete and move to next
    completeStep(stepIndex) {
        const session = this.getCurrentSession();
        if (!session) return null;

        const completedSteps = [...session.completedSteps];
        if (!completedSteps.includes(stepIndex)) {
            completedSteps.push(stepIndex);
        }

        const nextStep = Math.min(stepIndex + 1, 4); // Max 4 (5 steps: 0-4)

        return this.updateSession({
            currentStep: nextStep,
            completedSteps: completedSteps
        });
    }

    // Navigate to specific step
    goToStep(stepIndex) {
        if (stepIndex < 0 || stepIndex > 4) return null;
        return this.updateSession({ currentStep: stepIndex });
    }

    // Record time spent on a step
    recordStepTime(stepIndex, minutes) {
        const session = this.getCurrentSession();
        if (!session) return null;

        const stepTimes = { ...session.stepTimes };
        stepTimes[stepIndex] = (stepTimes[stepIndex] || 0) + minutes;

        return this.updateSession({ stepTimes });
    }

    // Complete entire session
    completeSession() {
        const session = this.getCurrentSession();
        if (!session) return null;

        const completedSession = {
            ...session,
            completed: true,
            completedAt: new Date().toISOString(),
            totalTime: this.calculateTotalTime(session)
        };

        // Save to completed sessions history
        this.saveToHistory(completedSession);

        // Clear active session
        localStorage.removeItem(this.storageKey);

        console.log('🎉 Session completed!', completedSession);
        return completedSession;
    }

    // Calculate total time spent
    calculateTotalTime(session) {
        const start = new Date(session.startTime);
        const end = new Date();
        const diffMs = end - start;
        const diffMins = Math.floor(diffMs / 60000);
        return diffMins;
    }

    // Save completed session to history
    saveToHistory(completedSession) {
        const historyKey = 'completedSessions';
        const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
        history.unshift(completedSession); // Add to beginning

        // Keep only last 10 completed sessions
        if (history.length > 10) {
            history.pop();
        }

        localStorage.setItem(historyKey, JSON.stringify(history));
    }

    // Get completion history
    getHistory() {
        return JSON.parse(localStorage.getItem('completedSessions') || '[]');
    }

    // Cancel/abandon current session
    cancelSession() {
        localStorage.removeItem(this.storageKey);
        console.log('❌ Session cancelled');
    }

    // Get session progress percentage
    getProgress() {
        const session = this.getCurrentSession();
        if (!session) return 0;
        return Math.round((session.completedSteps.length / 5) * 100);
    }

    // ==========================================
    // VIDEO BOOKMARKS
    // ==========================================

    // Bookmark a video
    bookmarkVideo(videoId, videoData) {
        const bookmarks = this.getBookmarks();

        // Check if already bookmarked
        const existingIndex = bookmarks.findIndex(b => b.videoId === videoId);

        if (existingIndex === -1) {
            // Add new bookmark
            bookmarks.unshift({
                videoId,
                ...videoData,
                bookmarkedAt: new Date().toISOString()
            });
            console.log('⭐ Video bookmarked:', videoId);
        } else {
            // Remove bookmark (toggle)
            bookmarks.splice(existingIndex, 1);
            console.log('☆ Bookmark removed:', videoId);
        }

        localStorage.setItem(this.bookmarksKey, JSON.stringify(bookmarks));
        return bookmarks;
    }

    // Check if video is bookmarked
    isBookmarked(videoId) {
        const bookmarks = this.getBookmarks();
        return bookmarks.some(b => b.videoId === videoId);
    }

    // Get all bookmarks
    getBookmarks() {
        return JSON.parse(localStorage.getItem(this.bookmarksKey) || '[]');
    }

    // Clear all bookmarks
    clearBookmarks() {
        localStorage.removeItem(this.bookmarksKey);
        console.log('🗑️ All bookmarks cleared');
    }

    // ==========================================
    // RECENTLY VIEWED VIDEOS
    // ==========================================

    // Add video to recently viewed
    addToRecentlyViewed(videoId, videoData) {
        let recentViews = this.getRecentlyViewed();

        // Remove if already exists (to move to front)
        recentViews = recentViews.filter(v => v.videoId !== videoId);

        // Add to beginning
        recentViews.unshift({
            videoId,
            ...videoData,
            viewedAt: new Date().toISOString()
        });

        // Keep only last 20
        if (recentViews.length > 20) {
            recentViews = recentViews.slice(0, 20);
        }

        localStorage.setItem(this.recentViewsKey, JSON.stringify(recentViews));
    }

    // Get recently viewed videos
    getRecentlyViewed() {
        return JSON.parse(localStorage.getItem(this.recentViewsKey) || '[]');
    }

    // Clear recently viewed
    clearRecentlyViewed() {
        localStorage.removeItem(this.recentViewsKey);
        console.log('🗑️ Recently viewed cleared');
    }

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================

    // Clear all data
    clearAllData() {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.bookmarksKey);
        localStorage.removeItem(this.recentViewsKey);
        localStorage.removeItem('completedSessions');
        console.log('🗑️ All session data cleared');
    }

    // Get session stats
    getStats() {
        const history = this.getHistory();
        const bookmarks = this.getBookmarks();
        const activeSession = this.getCurrentSession();

        return {
            completedSessions: history.length,
            totalBookmarks: bookmarks.length,
            hasActiveSession: activeSession !== null,
            currentProgress: this.getProgress()
        };
    }
}

// Create singleton instance
const sessionManager = new SessionManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sessionManager;
}
