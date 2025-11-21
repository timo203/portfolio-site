<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // In a real app, you would send an email here.
        // For now, we'll just log the message.
        Log::info('Contact Form Submission:', $validated);

        return response()->json(['message' => 'Message sent successfully!']);
    }
}
